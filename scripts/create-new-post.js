const fs = require("fs");
const inquirer = require("inquirer");
const dateFns = require("date-fns");

const DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
const CATEGORIES_PATH = "/posts";

function getCategories() {
  const cwd = process.cwd();
  const { existsSync, readdirSync } = fs;

  if (!existsSync(`${cwd}${CATEGORIES_PATH}`)) return [];

  return readdirSync(`${cwd}${CATEGORIES_PATH}`, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name.trim().toLowerCase());
}

function getFileName({ category, title }) {
  const date = dateFns.format(new Date(), "yyyy-mm-dd");
  const nextTitle = title.split(" ").join("-").toLowerCase();

  return `${date}-${category}-${nextTitle}`;
}

async function fetchTitle() {
  const { title } = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter post title",
      default: () => "New post title",
      validate: async (val) => {
        if (val.includes("'")) {
          return "Cannot use single quote";
        }

        const fileName = getFileName(val);
        const dest = `${TARGET_DIR}/${category}/${fileName}.md`;
        const destFileExists = await fs.pathExists(dest);

        if (destFileExists) {
          return `⚠️  Already exist file name:: ${fileName}.md.`;
        }

        return true;
      },
    },
  ]);

  return title;
}

async function fetchCategory() {
  const NEW_CATEGORY = "Create New Category";
  const categories = getCategories();
  const choiceCatecories = [
    ...categories,
    new inquirer.Separator(),
    NEW_CATEGORY,
  ];

  const { selectedCategory } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedCategory",
      message: "Select a category: ",
      choices: choiceCatecories,
    },
  ]);

  if (selectedCategory !== NEW_CATEGORY) {
    return selectedCategory;
  }

  const { newCategory } = await inquirer.prompt([
    {
      type: "input",
      name: "newCategory",
      message: "Create new Category",
      validate: (val) => {
        if (val.includes("'")) {
          return "Cannot use single quote";
        }

        if (categories.includes(val)) {
          return `Already exist category name:: ${val}`;
        }

        return true;
      },
    },
  ]);

  return newCategory;
}

async function createNewPost() {
  const date = dateFns.format(new Date(), DATE_FORMAT);

  console.log("create new post!");

  fetchCategory();
}

module.exports = createNewPost();
