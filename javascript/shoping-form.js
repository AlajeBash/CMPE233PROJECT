const selected = Array(7).fill(false);
const costs = document.querySelectorAll('td > p');
const quantities = Array(7).fill(1);
const totals = Array(7).fill(0);
const types = Array(7).fill(null);

document.querySelectorAll('input[type="checkbox"]').forEach((a, i) => {
  a.addEventListener('change', (e) => {
    selected[i] = e.target.checked;
  });
});

document.querySelectorAll('select').forEach((a, i) => {
  a.addEventListener('change', (e) => {
    quantities[i] = e.target.value;

    if (types[i]) {
      updateCost(i);
    }
  });
});

document.querySelectorAll('input[type="radio"').forEach((a) => {
  a.addEventListener('change', (e) => {
    const i = parseInt(e.target.name.split('').pop()) - 1;
    const val = parseInt(e.target.value);

    types[i] = val;

    updateCost(i);
  });
});

function updateCost(index) {
  totals[index] = quantities[index] * types[index];
  costs[index].innerHTML = totals[index];
}

function calculateTotalCostAfterDiscount() {
  let total = totals.filter((a, i) => selected[i]);

  if (total.length == 0) {
    alert('No language was selected');
  } else {
    total = total.reduce((a, b) => a + b);

    if (total > 200) {
      total = total - total * 0.15;
    } else {
      total = total + total * 0.15;
    }

    if (confirm('Total is: $' + total + ' Do you accept?')) {
      alert('Thank you.');
      costs[costs.length - 1].innerHTML = total;
    } else {
      alert('Canceled');
    }
  }
}
