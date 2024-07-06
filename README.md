# Interactive Tool in Regional Language to Inculcate Coding Skills in Rural Students (ITRL)

# About

This project is a web application to teach fundamental coding topics in Kannada, addressing the dearth of coding resources in regional languages. With a focus on pupils in rural Karnataka, the programme provides Kannada-language algorithm input together with specially designed lectures and exams. The programme translates Kannada methods to Python code using an NLP model that has been optimised using Salesforce's CodeT5, enabling learners to verify their reasoning in an embedded coding environment. An integrated, end-to-end solution for learning to code in Kannada is provided by the translation of outputs and mistakes from English to Kannada.

# Intuition

In the modern world, programming abilities—which include critical thinking and problem-solving—are essential. However, because internet materials are primarily written in English, students in remote locations frequently lack access to high-quality instructional resources, particularly in programming. They also encounter linguistic obstacles. In order to overcome language hurdles and give rural students fair access to programming, analytical thinking, and logical reasoning education, we suggest a web application that teaches programming in Kannada.

<p align=center>
<img src=https://github.com/Goutami-Sooda/ITRL-Project/blob/main/images/Screenshot%202024-06-25%20231355.png width=600 height=350>
</p>

# Key Features

With the many interactive features on this platform, students may test their knowledge and experiment with different ideas.
1. Coding Platform: The primary feature is, of course, the coding platform, where students can dictate or type algorithmic statements in their mother tongue and have the matching code generated for them. Students can use the embedded interpreter on the right side of the interface to run their code once all of the program's statements have been completed.

<p align=center>
<img src=https://github.com/Goutami-Sooda/ITRL-Project/blob/main/images/Screenshot%202024-06-25%20233548.png width=600 height=350>
</p>



<p align=center>
<img src=https://github.com/Goutami-Sooda/ITRL-Project/blob/main/images/Screenshot%202024-06-25%20233630.png width=600 height=350>
</p>

2. Error detection: The embedded interpreter recognises any logical, syntactic, or other errors and may translate the error message into Kannada so that students can comprehend it.

<p align=center>
<img src=https://github.com/Goutami-Sooda/ITRL-Project/blob/main/images/Screenshot%202024-06-25%20233709.png width=600 height=350>
</p>

<p align=center>
<img src=https://github.com/Goutami-Sooda/ITRL-Project/blob/main/images/Screenshot%202024-06-25%20234028.png width=600 height=350>
</p>

3. The third element is an interactive quiz platform where students can solve problems to see how much they know before moving on to writing programmes. A sizable corpus of native-language Python content is also included with the platform for learners.

<p align=center>
<img src=https://github.com/Goutami-Sooda/ITRL-Project/blob/main/images/Screenshot%202024-06-25%20231604.png width=600 height=350>
</p>

<p align=center>
<img src=https://github.com/Goutami-Sooda/ITRL-Project/blob/main/images/Screenshot%202024-06-25%20231657.png width=600 height=350>
</p>



# Code generation using NLP

Existing code-generation models don't meet this application's needs. We fine-tuned a pre-trained model on a custom dataset to ensure accurate results, focusing on the required input-output format.

## Dataset:

In order to optimise the model, the dataset was carefully selected and customised. There are 1250 items in this dataset, covering a variety of approaches. To make preparation simpler, the original dataset—which had been saved in CSV format—was transformed to JSON format. The JSON file had the items under the labels "text" and "code." The NL inputs were listed under the "text" label, and the corresponding and anticipated Python code output was listed under the "code" label. For every algorithm statement, two to five similar input statements with slightly different wording but the same meaning were added to the dataset, with the expected output being the same, in order to make sure the model understood the requirements of the input and related syntax automatically.
[Dataset](https://docs.google.com/spreadsheets/d/1li00slqHZU_VyLoVRVffpeKagQv7msoAeIbuu0Y13k4/edit?gid=0#gid=0)

## Fine Tuning:

Through fine-tuning [Salesforce's CodeT5-base](https://huggingface.co/Salesforce/codet5-large) model, the NLP model processes natural language inputs to produce programming language outputs. The model uses PyTorch for training, TensorFlow for data processing, and Hugging Face's transformers to generate comprehensive code using Google's T5 encoder-decoder architecture. Eleven25 elements from the custom dataset—hosted on GitHub—were designated as training and 125 as testing. TensorFlow and Roberta Tokenizer were used for byte-level Byte-Pair Encoding during the preprocessing stage. Hugging Face's Trainer class was used for Google Colab training. After it was adjusted, the model was uploaded to the Hugging Face Hub so that it could be integrated with the website.

## Embedded interpreter:

A versatile online code editor and compiler that works great in a web environment is [Trinket.io](https://trinket.io/features/python3). With its intuitive interface, both novices and experts can experiment with a variety of computer languages, such as HTML, CSS, JavaScript, and Python. For our application, we set it up to run in Python. Developing, publishing, and embedding code in webpages or instructional materials is made simple for users of Trinket.io, an intuitive platform for collaborative coding projects. It served as a coding interface by being integrated into the online application. The user needs to copy and paste each generated Python code expression or snippet from the text box into the editor.

## Frontend:

## Backend:

## Deployment:

## Youtube Resources:

Kannada Tutorial

<p align=center>
<iframe src="https://drive.google.com/file/d/1E6apNuZzItaZi5UQcBL8KSFYHVqrmBX7/view?usp=sharing" width="600" height="350" allow="autoplay"></iframe>
</p>

English Tutorial
<p align=center>
<iframe src="https://drive.google.com/file/d/1MEPcQEjBUFLF_r47iJ4BAu7gUZnlONK7/view?usp=drivesdk" width="600" height="350" allow="autoplay"></iframe>
</p>

# Conclusion:

Possessing coding and logical thinking skills is a much-needed skill today. However, students hailing from rural areas often do not know English, which hinders them from developing these skills because of the lack of resources available in their regional language. This study proposes an interactive tool that aims to solve this issue by creating a web application in Kannada, a regional language of India. The aim was to build the coding and logical thinking skills of students who did not know the English language and, thus, could not utilize traditional resources. The application consists of features, such as custom-made tutorials, quizzes, algorithm testing, and code generation features, all of which are available in Kannada. The application leverages a code-generation NLP model to support algorithm-building and testing features. The proposed application has significant scope for improvement. Future improvements could include the extension of the application to be available in other regional languages apart from Kannada and in programming languages other than Python.





