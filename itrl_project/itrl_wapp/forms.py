from django import forms

class TranslationForm(forms.Form):
    kannada_algorithm = forms.CharField(
        label='ಕನ್ನಡ ಅಲ್ಗಾರಿದಮ್ ', 
        widget=forms.Textarea(attrs={'placeholder': 'ಕನ್ನಡ ಅಲ್ಗಾರಿದಮ್ ಅನ್ನು ನಮೂದಿಸಿ'})
    )