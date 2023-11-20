from django.http import HttpResponse
from django.template import loader

from django.shortcuts import render
from django.http import JsonResponse
from .forms import TranslationForm
from translate import Translator


def main(request):
    template = loader.get_template('main.html')
    return HttpResponse(template.render())

def translate_algorithm(request):
    if request.method == 'POST':
        form = TranslationForm(request.POST)
        if form.is_valid():
            kannada_algorithm = form.cleaned_data['kannada_algorithm']
            
            try:
                # Perform translation using the 'translate' library (install it using: pip install translate)
                translated_algorithm = translate_algorithm_function(kannada_algorithm)

                # Return the translated algorithm     
                return JsonResponse({'translated_algorithm': translated_algorithm, 'error_message': None})

            except Exception as e:
                # Check if translation limit error occurred
                if "MYMEMORY LIMIT HAS BEEN REACHED" in str(e):
                    error_message = "Sorry for the inconvenience. Please try again after 24 hours."

                elif "network error" in str(e).lower():
                    error_message = "Network error. Please check your internet connection."

                else:
                    error_message = "An unexpected error occurred. Please try again later."    
                
                return JsonResponse({'translated_algorithm': None, 'error_message': _('Error: ') + error_message})
                

    else:
        form = TranslationForm()

    return render(request, 'translate_algorithm.html', {'form': form})
    

def translate_algorithm_function(kannada_algorithm):
    # Perform translation
    translator = Translator(from_lang="kn", to_lang="en")
    translated_text = translator.translate(kannada_algorithm)

    # Convert to lowercase
    lowercase_text = translated_text.lower()

    return lowercase_text

#def model_inference(english_algorithm):
    # todo
