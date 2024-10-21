document.addEventListener('DOMContentLoaded', () => {
    const goalInput = document.getElementById('goal');
    const submitButton = document.getElementById('submit');
    const goalList = document.querySelector('ul');
  
    let goals = [];
  
    function renderGoals() {
      goalList.innerHTML = '';
      goals.forEach((goal, index) => {
        const li = document.createElement('li');
        li.textContent = goal;
        li.addEventListener('click', () => removeGoal(index));
        goalList.appendChild(li);
      });
    }
  
    function addGoal() {
      const newGoal = goalInput.value.trim();
      if (newGoal) {
        goals.push(newGoal);
        goalInput.value = '';
        renderGoals();
      }
    }
  
    function removeGoal(index) {
      goals.splice(index, 1);
      renderGoals();
    }
  
    submitButton.addEventListener('click', addGoal);
  
    goalInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addGoal();
      }
    });
  
    // Remove the initial "Test" item
    goalList.innerHTML = '';
  });