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
      const path = `${dir ? `${dir}/` : ``}${component_name}`;
      const absPath = `components/${path}`;
      return { ...answers, path, absPath };
    });
  },
};
