import random as rad
from prisma import Prisma

async def database(helldivers: int = None, repeat:bool = None, equipament:bool = None, booster: bool = None):
    def random_number(max: list | dict):
        number = rad.randint(0, len(max) - 1)
        
        return number
    
    def helldiver_object_config(equipaments:bool = None, booster:bool = None):
        helldiver = {
            'helldiver': int,
            'stratagems': [],
            'equipaments': {
                'primary': [],
                'secondary': [],
                'grenade': [],
            },
            'booster': [],
        }
        
        if not equipaments:helldiver.pop('equipaments')
        if not booster:helldiver.pop('booster')        
        return helldiver
    
    def helldiver_soldier_equipaments(helldiver_soldier, primary, secondary, grenade):
        random_primary = random_number(primary)
        random_secondary = random_number(secondary)
        random_grenade = random_number(grenade)
        helldiver_soldier['equipaments']['primary'].append(primary[random_primary])
        helldiver_soldier['equipaments']['secondary'].append(secondary[random_secondary])
        helldiver_soldier['equipaments']['grenade'].append(grenade[random_grenade])
        
        return helldiver_soldier
    
    def helldiver_booster(helldiver_soldier, booster):
        while True:
            op_booster = booster[random_number(booster)]
            if not op_booster.id in list_booster:
                list_booster.append(op_booster.id)
                helldiver_soldier['booster'] = op_booster
                break      

        return helldiver_soldier
    
    # Consulta Banco de Dados        
    db = Prisma()
    await db.connect()
    
    helldiver_list = []
    
    
    stratagems = await db.stratagems.find_many()
    
    if equipament:
        equipaments = await db.guns.find_many()
        primary = []
        secondary = []
        grenade = []
    
        for i in equipaments:
            if i.type == 'primary':primary.append(i)
            if i.type == 'secondary':secondary.append(i)
            if i.type == 'grenade':grenade.append(i)
            
    if booster:
        bd_booster = await db.booster.find_many()
        list_booster = []
            
    await db.disconnect()
    
    def stratagems_config(check_list_stratagem: list = [], stratagem_option: bool = None, stratagem_bd: int = None):        
        # Verifica se não há 2 MECAS no mesmo Helldiver
        def check_exosuit(): 
            if 'tQtFJhZGsunkyaG' in check_list and 'QQyhlHekDYxGRKe' in check_list:
                check_list.pop('tQtFJhZGsunkyaG')
                while True:
                    random = random_number(stratagem_bd)
                    if not stratagem_bd[random].id == 'tQtFJhZGsunkyaG' and stratagem_bd[random].id =='QQyhlHekDYxGRKe':
                        stratagems_list.append(stratagem_bd[random])
                        break
        
        count = 0
        stratagems_list = []
        if stratagem_option:
            check_list = []
            while count < 4:
                random = random_number(stratagem_bd)                
                if not stratagem_bd[random].id in check_list:
                    check_list.append(stratagem_bd[random].id)
                    stratagems_list.append(stratagem_bd[random])
                    count += 1
            check_exosuit()
            
            return stratagems_list
        else:
            while count < 4:
                random = random_number(stratagem_bd)
                if not stratagem_bd[random].id in check_list_stratagem:
                    check_list_stratagem.append(stratagem_bd[random].id)
                    stratagems_list.append(stratagem_bd[random])
                    count += 1
            return stratagems_list
    
    soldier_helldiver = 0    
    while soldier_helldiver < helldivers:
        helldiver = helldiver_object_config(equipament)
        helldiver['helldiver'] = soldier_helldiver + 1
        list_strategems = stratagems_config(stratagem_option=repeat, stratagem_bd=stratagems)
        
        if equipament: helldiver = helldiver_soldier_equipaments(helldiver, primary, secondary, grenade)
        if booster: helldiver = helldiver_booster(helldiver, bd_booster)
        
        for i in list_strategems:
            helldiver['stratagems'].append(i)
            
        soldier_helldiver += 1
        helldiver_list.append(helldiver)
            
    return helldiver_list