const mainPageEl = document.getElementById("main-page");
const formPageEl = document.getElementById("form-page");

const editBtnEl = document.getElementById("edit-btn");
const submitBtnEl = document.getElementById("submit-btn");

// Input FormPageElement
const inputEmailEl = document.getElementById("input-email"); const inputNameEl = document.getElementById("input-name");
const inputRoleEl = document.getElementById("input-role"); const inputAvailabilityEl = document.getElementById("input-availability");
const inputUsiaEl = document.getElementById("input-usia"); const inputLokasiEl = document.getElementById("input-lokasi");
const inputYearsExperienceEl = document.getElementById("input-yearsExperience");

const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const roleEl = document.getElementById("role");
const availabilityEl = document.getElementById("availability");
const usiaEl = document.getElementById("usia");
const lokasiEl = document.getElementById("lokasi");
const yearsExperienceEl = document.getElementById("yearsExperience");

formPageEl.style.display = "none";

editBtnEl.addEventListener("click", function () {
	mainPageEl.style.display = "none";
	formPageEl.style.display = "block";
});
submitBtnEl.addEventListener("click", function() {
	mainPageEl.style.display = "block";
	formPageEl.style.display = "none";

    nameEl.textContent = inputNameEl.value;
    emailEl.textContent = inputEmailEl.value;
    roleEl.textContent = inputRoleEl.value;
    availabilityEl.textContent = inputAvailabilityEl.value;
    usiaEl.textContent = inputUsiaEl.value;
    lokasiEl.textContent = inputLokasiEl.value;
    yearsExperienceEl.textContent = inputYearsExperienceEl.value;

});