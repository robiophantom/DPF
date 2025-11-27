from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import spacy

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for dev: allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for request body
class Cleaning(BaseModel):
    text : str
    action: str = ""

# Basic route to check if the server is running
@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

# Text cleaning endpoint
@app.post("/clean")
def clean_text(data: Cleaning):
    text = data.text
    doc = nlp(text.lower())

    tokens = [token.lemma_ for token in doc if not token.is_stop and not token.is_punct and not token.is_space]
    cleaned_text = ' '.join(tokens) # simple join for demonstration
    return {"cleaned_text": cleaned_text}


