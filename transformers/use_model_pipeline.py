#to load the model using the pipeline method of the transformers library

# Use a pipeline as a high-level helper
from transformers import pipeline

pipe = pipeline("text2text-generation", model="AshArya/ITRLTrained")
