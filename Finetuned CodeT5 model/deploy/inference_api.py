# API call for the model from HuggingFace
import requests

API_URL = "https://api-inference.huggingface.co/models/AshArya/ITRLTrained"
headers = {"Authorization": "Bearer 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"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
	
output = query({
	"inputs": "The answer to the universe is", #The 'inputs' should be replaced by the required query
})

#Ideally, the translated algorithm statement should be assigned to a variable and used within the query() function.
#Any inconsistencies, please message.
