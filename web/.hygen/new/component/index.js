module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "component_name",
        message: "What is the component name?",
      },
      {
        type: "input",
        name: "dir",
        message: "Where is the directory(Optional)",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { component_name, dir } = answers;
      const nameToUpperCase =
        component_name.charAt(0).toUpperCase() + component_name.slice(1);
      const path = `${dir ? `${dir}/` : ``}${nameToUpperCase}`;
      const absPath = `components/${path}`;
      return { ...answers, path, absPath };
    });
  },
};
