# Runners Quest Agent Guidance

- Runners Quest is a greenfield project; prefer small, incremental changes.
- Do not add dependencies, abstractions, or infrastructure without a concrete current need.
- React owns the application and its lifecycle.
- PixiJS may own graphical or arcade surfaces where appropriate, but application and business state should not be hidden inside Pixi scenes.
- Keep frontend code usable on both desktop and mobile.
- Follow existing project conventions, and update documentation when commands or project structure materially change.
- Run applicable tests and build checks before considering work complete.
- The project uses the Node version in `.nvmrc`; in non-interactive shells, run `. "$HOME/.nvm/nvm.sh" && nvm use` before Node or npm commands.
