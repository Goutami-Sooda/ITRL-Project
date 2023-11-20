---
license: apache-2.0
base_model: Salesforce/codet5-base
tags:
- generated_from_keras_callback
model-index:
- name: ITRLTrained
  results: []
---

<!-- This model card has been generated automatically according to the information Keras had access to. You should
probably proofread and complete it, then remove this comment. -->

# ITRLTrained

This model is a fine-tuned version of [Salesforce/codet5-base](https://huggingface.co/Salesforce/codet5-base) on the [ITRLDataset](https://huggingface.co/datasets/AshArya/ITRLDataset) dataset.


## Model description

This model intends to act as a text-to-code generation mechanism. It is a fine-tuned version of the Salesforce/codet5-base model on a custom dataset. Its role is to take in an algorithmic statement as input and generate a corresponding code output for the statement in Python. The deployment of this model is for the purpose of building an Interactive Tool To Inculcate Coding Skills For Rural Students in Regional Languages (ITRL). 

## Intended uses & limitations

This model is currently trained on a custom dataset (refer to above). Its intended use is to take in one-line algorithmic statements as input and generate Python code corresponding to the statement. The scope of generation remains limited to the current dataset, which includes basic and rudimentary Python statements.

## Training and evaluation data

Refer to [ITRLDataset](https://huggingface.co/datasets/AshArya/ITRLDataset)

### Training hyperparameters

The following hyperparameters were used during training:
- optimizer: None
- training_precision: float32

### Framework versions

- Transformers 4.35.2
- TensorFlow 2.14.0
- Tokenizers 0.15.0
