<script>
  export let patterns = [];
  
  let currentIndex = 0;
  let isFlipped = false;
  
  function flipCard() {
    isFlipped = !isFlipped;
  }
  
  function nextCard() {
    if (currentIndex < patterns.length - 1) {
      currentIndex++;
      isFlipped = false;
    }
  }
  
  function prevCard() {
    if (currentIndex > 0) {
      currentIndex--;
      isFlipped = false;
    }
  }
  
  $: currentPattern = patterns[currentIndex] || patterns[0];
  $: hasNext = currentIndex < patterns.length - 1;
  $: hasPrev = currentIndex > 0;
</script>

<style>
  .flashcard-container {
    perspective: 1000px;
    margin: 20px auto;
    width: 100%;
    max-width: 600px;
    height: 300px;
  }
  
  .flashcard {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    cursor: pointer;
    margin-bottom: 20px;
  }
  
  .flashcard.flipped {
    transform: rotateY(180deg);
  }
  
  .flashcard-front, .flashcard-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .flashcard-front {
    background-color: #3498db;
    color: white;
  }
  
  .flashcard-back {
    background-color: white;
    color: #333;
    transform: rotateY(180deg);
    overflow-y: auto;
  }
  
  .pattern-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }
  
  .pattern-category {
    font-size: 16px;
    margin-bottom: 10px;
    opacity: 0.8;
  }
  
  .pattern-description {
    margin-top: 20px;
    line-height: 1.5;
  }
  
  .pattern-example {
    margin-top: 15px;
    font-style: italic;
    background-color: #f8f9fa;
    padding: 10px;
    border-radius: 5px;
    border-left: 3px solid #3498db;
  }
  
  .navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .nav-btn {
    padding: 10px 15px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .nav-btn:hover {
    background-color: #2980b9;
  }
  
  .nav-btn:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
  
  .card-counter {
    display: inline-block;
    background-color: #3498db;
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>

<div class="flashcard-container">
  <div class="flashcard" class:flipped={isFlipped} on:click={flipCard}>
    <div class="flashcard-front">
      <div class="pattern-title">{currentPattern.name}</div>
      <div class="pattern-category">{currentPattern.category} Pattern</div>
      <div>(Click to flip)</div>
    </div>
    <div class="flashcard-back">
      <div class="pattern-title">{currentPattern.name}</div>
      <div class="pattern-category">{currentPattern.category} Pattern</div>
      <div class="pattern-description">{currentPattern.description}</div>
      <div class="pattern-example">
        <strong>Examples:</strong> {currentPattern.example}
      </div>
      <div class="pattern-description">{currentPattern.details}</div>
      <div>(Click to flip back)</div>
    </div>
  </div>
</div>

<div class="navigation">
  <button on:click={prevCard} class="nav-btn" disabled={!hasPrev}>Previous</button>
  <span class="card-counter">Card {currentIndex + 1} of {patterns.length}</span>
  <button on:click={nextCard} class="nav-btn" disabled={!hasNext}>Next</button>
</div>