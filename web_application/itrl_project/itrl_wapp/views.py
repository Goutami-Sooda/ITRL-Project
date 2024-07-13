from django.http import HttpResponse 
from django.http import JsonResponse 
from deep_translator import GoogleTranslator
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
            translated_text = GoogleTranslator(source='kn', target='en').translate(kannada_algorithm)
            lowercase_text = translated_text.lower()
            #print(lowercase_text)
            
            if "network error" in translated_text.lower():
                error_message = "Network error. Please check your internet connection."
                return JsonResponse({'generatedText': error_message})        
            
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
            
    
@csrf_exempt
def translate_error_message(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            error_message = data.get('text', '') 
            #print(error_message)

            # Perform translation
            translated_error = GoogleTranslator(source='en', target='kn').translate(error_message)

            if "network error" in translated_error.lower():
                error_info = "Network error. Please check your internet connection."
                return JsonResponse({'translatedText': error_info})

            return JsonResponse({'translatedText': translated_error})
        
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def translate_about(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            error_message = data.get('text', '') 
            #print(error_message)

            # Perform translation
            translated_error = GoogleTranslator(source='kn', target='en').translate(error_message)

            if "network error" in translated_error.lower():
                error_info = "Network error. Please check your internet connection."
                return JsonResponse({'translatedText': error_info})

            return JsonResponse({'translatedText': translated_error})
        
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def activate_model(request):
    if request.method == 'POST':
        # Process the model activation request
        try:
            #data = json.loads(request.body)
            API_URL = "https://api-inference.huggingface.co/models/AshArya/ITRLTrained"
            headers = {"Authorization": "Bearer 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"}
            start = "print success"
            payload = {"inputs": start}

            # Perform model inference
            requests.post(API_URL, headers=headers, json=payload)

            return JsonResponse({'message': 'Model activated successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=400)