import navigation from "./util/navigation";
import footer from "./util/footer";
import home from "./home/home";
import menu from "./menu/menu";
import contract from "./about/contract";

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });
  button.classList.add("active");
}

function mainComponent() {
  const container = document.createElement("div");
  const footerContainer = document.createElement("div");
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  //Append navigation bar
  content.appendChild(
    navigation.createNavigation(["Home", "Menu", "Contract Us"])
  );

  const homeCreation = () => {
    home.createRestaurantName("The Testy Corner");
    home.createAboutRestaurant(
      "The Testy Corner's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    );
    home.createWorkingHours([
      "Sunday: 8am - 8pm",
      "Monday: 6am - 6pm",
      "Tuesday: 6am - 6pm",
      "Wednesday: 6am - 6pm",
      "Thursday: 6am - 10pm",
      "Friday: 6am - 10pm",
      "Saturday: 8am - 10pm",
    ]);
    home.createLocation("134 APC Bose Road, Kolkata - 700002");
    content.appendChild(home.createHome());
  };

  // Make sure dom content loaded before applying any interactivity
  document.addEventListener("DOMContentLoaded", function () {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    const homeButton = document.querySelector("#Home");
    const menuButton = document.querySelector("#Menu");
    const contractUsButton = document.querySelector("#Contract");
    setActiveButton(homeButton);

    homeButton.addEventListener("click", () => {
      const main = document.querySelector(".main");
      main.textContent = "";
      homeCreation();
      setActiveButton(homeButton);
    });

    menuButton.addEventListener("click", () => {
      const main = document.querySelector(".main");
      main.textContent = "";
      main.appendChild(menu.createMenu());
      setActiveButton(menuButton);
    });

    contractUsButton.addEventListener("click", () => {
      const main = document.querySelector(".main");
      main.textContent = "";
      main.appendChild(contract.createContract());
      setActiveButton(contractUsButton);
    });
  });
  homeCreation();

  //Append footer
  footerContainer.appendChild(footer.createFooter("Farid"));
  container.appendChild(content);
  container.appendChild(footerContainer);

  return container;
}

export default function initWebsite() {
  document.body.appendChild(mainComponent());
}
