async function fetchJoke() {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
    const data = await response.json();
    
    const jokeElement = document.getElementById('joke');
    if (data.type === 'single') {
      jokeElement.textContent = data.joke;
    } else {
      jokeElement.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
    }
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
}

// Call the function when needed
fetchJoke();