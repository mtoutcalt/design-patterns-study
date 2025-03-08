<script>
  import { createEventDispatcher } from 'svelte';
  
  export let patterns = [];
  export let allPatterns = [];
  
  const dispatch = createEventDispatcher();
  
  let currentPattern = null;
  let options = [];
  let selectedOption = null;
  let answered = false;
  let isCorrect = false;
  let quizType = 'name'; // 'name' or 'describe'
  
  // Initialize first question
  function initializeQuestion() {
    if (patterns.length === 0) return;
    
    // Pick a random pattern from the filtered list
    const randomIndex = Math.floor(Math.random() * patterns.length);
    currentPattern = patterns[randomIndex];
    
    // Generate options depending on quiz type
    generateOptions();
    
    // Reset state
    selectedOption = null;
    answered = false;
    isCorrect = false;
  }
  
  function generateOptions() {
    // Get correct answer
    const correctAnswer = currentPattern.name;
    
    // Start with the correct answer
    let possibleOptions = [correctAnswer];
    
    // Add 3 more random patterns of the same category if possible
    const sameCategory = allPatterns.filter(p => 
      p.category === currentPattern.category && p.name !== correctAnswer
    );
    
    // If not enough patterns in the same category, use patterns from other categories
    const otherPatterns = allPatterns.filter(p => 
      p.category !== currentPattern.category && p.name !== correctAnswer
    );
    
    // Combine and shuffle potential options
    const potentialOptions = [...sameCategory, ...otherPatterns];
    
    // Randomly select 3 more options
    while (possibleOptions.length < 4 && potentialOptions.length > 0) {
      const randomIndex = Math.floor(Math.random() * potentialOptions.length);
      possibleOptions.push(potentialOptions[randomIndex].name);
      potentialOptions.splice(randomIndex, 1);
    }
    
    // Shuffle the options
    options = shuffleArray(possibleOptions);
  }
  
  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  
  function checkAnswer() {
    if (!selectedOption || answered) return;
    
    answered = true;
    isCorrect = selectedOption === currentPattern.name;
    
    // Dispatch result to parent component
    dispatch('result', { correct: isCorrect });
  }
  
  function nextQuestion() {
    initializeQuestion();
  }
  
  function toggleQuizType() {
    quizType = quizType === 'name' ? 'describe' : 'name';
    initializeQuestion();
  }
  
  // Initialize the first question
  $: if (patterns.length > 0 && (!currentPattern || !patterns.includes(currentPattern))) {
    initializeQuestion();
  }
</script>

<style>
  .quiz-container {
    max-width: 700px;
    margin: 0 auto;
  }
  
  .quiz-prompt {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .prompt-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #2c3e50;
  }
  
  .options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 20px;
  }
  
  .option {
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    background-color: #f9f9f9;
  }
  
  .option:hover {
    border-color: #3498db;
    background-color: #f0f7fb;
  }
  
  .option.selected {
    border-color: #3498db;
    background-color: #e1f0fa;
  }
  
  .option.correct {
    border-color: #2ecc71;
    background-color: #d4f7e6;
  }
  
  .option.incorrect {
    border-color: #e74c3c;
    background-color: #fae1dd;
  }
  
  .action-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .action-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .check-btn {
    background-color: #3498db;
    color: white;
  }
  
  .check-btn:hover {
    background-color: #2980b9;
  }
  
  .next-btn {
    background-color: #2ecc71;
    color: white;
  }
  
  .next-btn:hover {
    background-color: #27ae60;
  }
  
  .check-btn:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
  
  .toggle-type-btn {
    background-color: #9b59b6;
    color: white;
  }
  
  .toggle-type-btn:hover {
    background-color: #8e44ad;
  }
  
  .feedback {
    margin-top: 15px;
    padding: 10px;
    border-radius: 4px;
    font-weight: bold;
    text-align: center;
  }
  
  .feedback.correct {
    background-color: #d4f7e6;
    color: #27ae60;
  }
  
  .feedback.incorrect {
    background-color: #fae1dd;
    color: #c0392b;
  }
  
  .explanation {
    margin-top: 15px;
    padding: 15px;
    background-color: #f8f9fa;
    border-radius: 8px;
    border-left: 3px solid #3498db;
  }
</style>

<div class="quiz-container">
  {#if currentPattern}
    <div class="quiz-prompt">
      <div class="prompt-title">
        {#if quizType === 'name'}
          Which design pattern matches this description?
        {:else}
          Which description matches the {currentPattern.name} pattern?
        {/if}
      </div>
      
      {#if quizType === 'name'}
        <p>{currentPattern.description}</p>
        <p>Category: {currentPattern.category}</p>
      {:else}
        <p>Select the correct description for the {currentPattern.name} pattern:</p>
      {/if}
      
      <div class="options">
        {#each options as option}
          <div 
            class="option" 
            class:selected={selectedOption === option && !answered}
            class:correct={answered && option === currentPattern.name}
            class:incorrect={answered && selectedOption === option && option !== currentPattern.name}
            on:click={() => { if (!answered) selectedOption = option; }}
          >
            {option}
          </div>
        {/each}
      </div>
      
      {#if answered}
        <div class="feedback" class:correct={isCorrect} class:incorrect={!isCorrect}>
          {isCorrect ? 'Correct!' : 'Incorrect!'}
        </div>
        
        <div class="explanation">
          <strong>{currentPattern.name}</strong>: {currentPattern.description}
          <p><strong>Examples:</strong> {currentPattern.example}</p>
        </div>
      {/if}
    </div>
    
    <div class="action-buttons">
      <button class="action-btn toggle-type-btn" on:click={toggleQuizType}>
        Switch to {quizType === 'name' ? 'Pattern → Description' : 'Description → Pattern'} Mode
      </button>
      
      {#if !answered}
        <button 
          class="action-btn check-btn" 
          on:click={checkAnswer}
          disabled={!selectedOption}
        >
          Check Answer
        </button>
      {:else}
        <button class="action-btn next-btn" on:click={nextQuestion}>
          Next Question
        </button>
      {/if}
    </div>
  {:else}
    <p>No patterns available for quiz.</p>
  {/if}
</div>