# Dungeon World 2

This is an initial outline of Dungeon World 2 beta character sheet.

It is available at:
https://tznind.github.io/dw2/cs.html

For character sheets for other games (including dungeon world 1 and stonetop) and the main sheet engine see:
https://github.com/tznind/lc

## Creating Moves

Moves are designed for flexibility and ease writing. Simply enter moves into the json file and add to the availability map to relevant role(s).

<a href="https://github.com/tznind/st/tree/main/data/moves"/>
<img src="https://github.com/user-attachments/assets/d8efa576-ee04-4549-9699-ae3caa280952"/>
</a>

_All moves are defined in json files with schemas for helpful autocompletion_

## Getting Started

To create your own game system:

- Create a new repository using this template

<img width="132" height="82" alt="GitHub template button" src="https://github.com/user-attachments/assets/6c97f925-6db8-4687-ba26-101705bf736e" />

- Update the JSON files in the [data](./data) folder with your content.  
- Enable **GitHub Pages** in your repository settings (Settings=>Pages).
- Visit your sheet at:  

```
https://your_name.github.io/your_repository_name/cs.html
```

### Cookbook

For more detailed description of how to create various types of moves see [Cookbook.md](./Cookbook.md)

### Url Length 
There is a maximum url Length of ~8000 characters.  This is enforced by GitHub Pages. In practice, you should not reach this unless you have a large number of free text inputs into which your players add a lot of text. 

See [LIMITATIONS.md](./LIMITATIONS.md) for details.

## Powered by the Apocalypse

You can read more about Powered by the Apocalypse, including their permissive license terms, here:

https://lumpley.games/2023/11/22/what-is-pbta/
The system will automatically load the moves file and make the role available.


## Sync changes

If after using the template, if find new features have been added that you want to sync into your repository run the following to sync changes:

```
git remote add upstream https://github.com/tznind/lc
git fetch upstream

git checkout main
git merge upstream/main --allow-unrelated-histories
```

(for merge conflicts e.g. in data folder - always keep your own changes and discard incoming)

## Testing Locally

To run the page locally (i.e. not in GitHub Pages) you can use any of:

```powershell
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP  
php -S localhost:8000
```

Then visit `http://localhost:8000/cs.html`
