// Select all elements with the 'selection' class
const selectionElements = document.querySelectorAll('.selection');

// Add event listeners to handle text selection
selectionElements.forEach((element) => {
  // Store the original content as a data attribute
  element.dataset.originalContent = element.innerHTML;

  element.addEventListener('mouseup', () => {
    handleTextSelection(element);
  });
});

/**
 * Handles text selection within an element.
 * @param {HTMLElement} element - The element where selection occurs.
 */
function handleTextSelection(element) {
  const selection = window.getSelection();
  const selectedText = selection.toString().trim();

  // Exit if no valid text is selected
  if (!selectedText) return;

  const range = selection.getRangeAt(0);
  if (!isRangeWithinElement(range, element)) return;

  // Construct the updated content
  const originalContent = element.innerHTML;
  const start = originalContent.slice(0, range.startOffset);
  const end = originalContent.slice(range.endOffset);

  // Wrap the selected text with a custom span
  element.innerHTML = `${start}<span class="mark-special-selected">${selectedText}</span>${end}`;
  document.body.classList.add('myapp-selections-enabled');

  // Clear the browser selection to avoid residual highlight
  selection.removeAllRanges();
}

/**
 * Resets all elements to their original content.
 */
function clearSelections() {
  const selections = document.querySelectorAll('[data-original-content]');
  selections.forEach((element) => {
    element.innerHTML = element.dataset.originalContent;
  });
  document.body.classList.remove('myapp-selections-enabled');
}

/**
 * Validates if the selection range is within the target element.
 * @param {Range} range - The selected range.
 * @param {HTMLElement} element - The target element.
 * @returns {boolean} - True if the range is within the element.
 */
function isRangeWithinElement(range, element) {
  const container = range.commonAncestorContainer;
  return element.contains(container);
}

// Clear selections when clicking outside
document.body.addEventListener('mousedown', () => {
  if (document.body.classList.contains('myapp-selections-enabled')) {
    clearSelections();
  }
});
