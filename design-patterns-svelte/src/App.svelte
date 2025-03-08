<script>
  import { onMount } from 'svelte';
  import { designPatterns } from './data/patterns.js';
  import FlashcardMode from './components/FlashcardMode.svelte';
  import QuizMode from './components/QuizMode.svelte';
  import StudyStats from './components/StudyStats.svelte';
  
  // App state
  let mode = 'menu'; // 'menu', 'flashcards', 'quiz'
  let selectedCategory = 'All';
  let categories = ['All', 'Creational', 'Structural', 'Behavioral'];
  let filteredPatterns = designPatterns;
  let stats = {
    correct: 0,
    incorrect: 0,
    attempted: 0,
    streak: 0,
    bestStreak: 0,
    lastResults: []
  };
  
  // Initialize filtered patterns
  $: {
    if (selectedCategory === 'All') {
      filteredPatterns = designPatterns;
    } else {
      filteredPatterns = designPatterns.filter(pattern => pattern.category === selectedCategory);
    }
  }
  
  function setMode(newMode) {
    mode = newMode;
  }
  
  function selectCategory(category) {
    selectedCategory = category;
  }
  
  function updateStats(result) {
    stats = {
      ...stats,
      correct: result ? stats.correct + 1 : stats.correct,
      incorrect: result ? stats.incorrect : stats.incorrect + 1,
      attempted: stats.attempted + 1,
      streak: result ? stats.streak + 1 : 0,
      bestStreak: result && stats.streak + 1 > stats.bestStreak ? stats.streak + 1 : stats.bestStreak,
      lastResults: [...stats.lastResults.slice(-9), result]
    };
  }
  
  function resetStats() {
    stats = {
      correct: 0,
      incorrect: 0,
      attempted: 0,
      streak: 0,
      bestStreak: 0,
      lastResults: []
    };
  }
</script>

<style>
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f5f5f5;
    padding: 20px;
    margin: 0;
    color: #333;
  }
  
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #2c3e50;
  }
  
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .menu-btn {
    padding: 15px 30px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.3s;
    font-size: 18px;
    width: 250px;
    text-align: center;
  }
  
  .menu-btn:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
  
  .categories {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .category-btn {
    padding: 8px 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .category-btn:hover {
    background-color: #2980b9;
  }
  
  .category-btn.active {
    background-color: #2c3e50;
  }
  
  .back-btn {
    padding: 8px 16px;
    background-color: #7f8c8d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-bottom: 20px;
  }
  
  .back-btn:hover {
    background-color: #6c7a7a;
  }
</style>

<div class="container">
  <h1>Gang of Four Design Patterns</h1>
  
  {#if mode === 'menu'}
    <div class="menu">
      <button class="menu-btn" on:click={() => setMode('flashcards')}>
        Flashcard Mode
      </button>
      <button class="menu-btn" on:click={() => setMode('quiz')}>
        Quiz Mode
      </button>
      
      {#if stats.attempted > 0}
        <StudyStats {stats} on:reset={resetStats} />
      {/if}
    </div>
  {:else}
    <button class="back-btn" on:click={() => setMode('menu')}>
      Back to Menu
    </button>
    
    <div class="categories">
      {#each categories as category}
        <button 
          on:click={() => selectCategory(category)} 
          class="category-btn" 
          class:active={selectedCategory === category}>
          {category}
        </button>
      {/each}
    </div>
    
    {#if mode === 'flashcards'}
      <FlashcardMode patterns={filteredPatterns} />
    {:else if mode === 'quiz'}
      <QuizMode 
        patterns={filteredPatterns} 
        allPatterns={designPatterns}
        on:result={(e) => updateStats(e.detail.correct)} 
      />
    {/if}
  {/if}
</div>