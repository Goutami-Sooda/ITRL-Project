# Load model directly
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

tokenizer = AutoTokenizer.from_pretrained("AshArya/ITRLTrained")
model = AutoModelForSeq2SeqLM.from_pretrained("AshArya/ITRLTrained")
