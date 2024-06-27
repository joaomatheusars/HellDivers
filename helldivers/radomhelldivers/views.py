from django.shortcuts import render, redirect
import asyncio
from .bd import database
import time

def form(request):    
    if request.method == 'POST':
        i = time.time()
        helldivers = request.POST.get("helldivers")
        repeat = request.POST.get("repeat")
        equipament = request.POST.get("equipament")
        booster = request.POST.get("booster")
        
        True if repeat     == 'on' else False
        True if equipament == 'on' else False
        True if booster    == 'on' else False
        
        helldiver_list = asyncio.run(database(int(helldivers), repeat, equipament, booster))

        context = {
            'helldivers': helldiver_list,
        }
        
        f = time.time()             
        print("tempo de execução ",f-i)
        
        return render(request, 'components/helldivers.html', context)
    
    return render(request, 'components/form.html')
