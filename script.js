function toggleModal(id) {
  const modal = document.getElementById(id);
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}
