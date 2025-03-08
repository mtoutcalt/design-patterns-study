# src/components/StudyStats.svelte
<script>
  import { createEventDispatcher } from 'svelte';
  
  export let stats = {
    correct: 0,
    incorrect: 0,
    attempted: 0,
    streak: 0,
    bestStreak: 0,
    lastResults: []
  };
  
  const dispatch = createEventDispatcher();
  
  function resetStats() {
    dispatch('reset');
  }
  
  $: accuracy = stats.attempted > 0 
    ? Math.round((stats.correct / stats.attempted) * 100) 
    : 0;
</script>

<style>
  .stats-container {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
  }
  
  .stats-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;
    color: #2c3e50;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  
  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 6px;
  }
  
  .stat-label {
    font-size: 14px;
    color: #7f8c8d;
    margin-bottom: 5px;
  }
  
  .stat-value {
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;
  }
  
  .accuracy-value {
    color: #3498db;
  }
  
  .streak-value {
    color: #e67e22;
  }
  
  .best-streak-value {
    color: #2ecc71;
  }
  
  .results-history {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 15px;
  }
  
  .result-indicator {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  
  .correct-indicator {
    background-color: #2ecc71;
  }
  
  .incorrect-indicator {
    background-color: #e74c3c;
  }
  
  .reset-btn {
    display: block;
    margin: 20px auto 0;
    padding: 8px 16px;
    background-color: #7f8c8d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .reset-btn:hover {
    background-color: #6c7a7a;
  }
</style>

<div class="stats-container">
  <div class="stats-title">Your Study Progress</div>
  
  <div class="stats-grid">
    <div class="stat-item">
      <div class="stat-label">Questions Attempted</div>
      <div class="stat-value">{stats.attempted}</div>
    </div>
    
    <div class="stat-item">
      <div class="stat-label">Correct Answers</div>
      <div class="stat-value">{stats.correct}</div>
    </div>
    
    <div class="stat-item">
      <div class="stat-label">Accuracy</div>
      <div class="stat-value accuracy-value">{accuracy}%</div>
    </div>
    
    <div class="stat-item">
      <div class="stat-label">Current Streak</div>
      <div class="stat-value streak-value">{stats.streak}</div>
    </div>
    
    <div class="stat-item" style="grid-column: span 2;">
      <div class="stat-label">Best Streak</div>
      <div class="stat-value best-streak-value">{stats.bestStreak}</div>
    </div>
  </div>
  
  {#if stats.lastResults.length > 0}
    <div class="results-history">
      {#each stats.lastResults as result}
        <div 
          class="result-indicator" 
          class:correct-indicator={result} 
          class:incorrect-indicator={!result}
        ></div>
      {/each}
    </div>
  {/if}
  
  <button class="reset-btn" on:click={resetStats}>
    Reset Stats
  </button>
</div>