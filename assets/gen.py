import torch
from diffusers import StableDiffusionPipeline

# Make sure you're running this on a machine with a GPU for faster performance
device = "cuda" if torch.cuda.is_available() else "cpu"

# Load the pre-trained Stable Diffusion model
model_id = "CompVis/stable-diffusion-v1-4"
pipe = StableDiffusionPipeline.from_pretrained(model_id)
pipe = pipe.to(device)

# Function to generate an image from a text prompt
def generate_image(prompt, num_inference_steps=50, guidance_scale=7.5):
    with torch.no_grad():
        image = pipe(prompt, num_inference_steps=num_inference_steps, guidance_scale=guidance_scale).images[0]
    return image

# Example usage
prompt = input("Enter prompt")
image = generate_image(prompt)

# Save or display the image
image.save("generated_image.png")
image.show()