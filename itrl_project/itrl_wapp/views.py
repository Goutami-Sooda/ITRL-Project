from django.http import HttpResponse 
from django.http import JsonResponse 
from translate import Translator
from django.views.decorators.csrf import csrf_exempt
import json
import requests


@csrf_exempt
def translate_algorithm(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            kannada_algorithm = data.get('text', '') 
            #print(kannada_algorithm)

            # Perform translation
            translator = Translator(from_lang="kn", to_lang="en")
            translated_text = translator.translate(kannada_algorithm)
            #print(translated_text)

            # Convert to lowercase
            lowercase_text = translated_text.lower()
            #print(lowercase_text)
            

            # Check if translation limit has been reached
            if "MYMEMORY LIMIT HAS BEEN REACHED" in translated_text:
                error_message= "Sorry for the inconvenience. Please try again after 24 hours."
                return JsonResponse({'translatedText': error_message})

            elif "network error" in translated_text.lower():
                error_message = "Network error. Please check your internet connection."
                return JsonResponse({'translatedText': error_message})

            
            #return JsonResponse({'translatedText': lowercase_text})
            python_code = model_inference(lowercase_text)
            return JsonResponse({'generatedText': python_code})
        
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
    

def model_inference(english_algorithm):
    API_URL = "https://api-inference.huggingface.co/models/AshArya/ITRLTrained"
    headers = {"Authorization": "Bearer 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"}
    payload = {"inputs": english_algorithm}

    # Perform model inference
    response = requests.post(API_URL, headers=headers, json=payload)
    result = response.json()
    
    # Parse the output to extract the python code generated
    if result and isinstance(result, list) and len(result) > 0:
        generated_text = result[0].get("generated_text", "")
        
        #print(generated_text)
        return generated_text
            
    

def options_view(request):
    response = HttpResponse()
    response['Access-Control-Allow-Origin'] = 'http://localhost:5173/'  # Set this to the actual allowed origin in production
    response['Access-Control-Allow-Methods'] = 'POST, OPTIONS'  # Add other allowed methods
    response['Access-Control-Allow-Headers'] = 'Content-Type'  # Add other allowed headers
    return response
