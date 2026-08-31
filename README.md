# Dungeon World 2

This is an initial outline of Dungeon World 2 beta character sheet.

It is available at:
https://tznind.github.io/dw2/cs.html

For character sheets for other games (including dungeon world 1 and stonetop) and the main sheet engine see:
https://github.com/tznind/lc

## Example Characters
<table>
  <tr>
    <td width="33%">
      🎭&nbsp;<a title="The Bard" href="https://tznind.github.io/dw2/cs.html?name=Wynn+Swifthand+%28He%2FHim%29&player=T&role=The+Bard&role2=Swashbuckler&takeFrom_evy022_role=Struggles&role3=Dabbler&takeFrom_swb004_role=Struggles&role4=Spy&move_evy022=1&takeFrom_evy023_role=Bonds&takeFrom_evy022_move=str004&move_str004_dtl=I+am+surrounded+by+real+heroes%2C+but+I%27m+just+a+Jester.+On+good+days+I%27m+making+speeches+about+how+heroic+we+all+are+and+I+genuinely+believe+it.++On+bad+days+the+doubts+and+fears+consume+me+-+even+if+nobody+sees+them.&str4_0=The+heroes+of+stonetop&str4_1=Speeches+and+Bravado&track_stat_dex=1&move_evy023_1=1&takeFrom_evy023_move=bon006&takeFrom_evy023_2_role=Bonds&takeFrom_evy023_3_role=Bonds&takeFrom_evy023_4_role=Bonds&takeFrom_evy023_5_role=Bonds&takeFrom_evy023_6_role=Bonds&bon6_wi=Morgan&track_bon006_1=1&move_bon006_1_p1=1&move_bon006_1_p3=1&level=12&hp=18&armor=0&track_xp_track=3&origins_ancestry=Human+Jester%2C+obsessed+with+puppets%2C+music+and+merriment.&origins_community=Stonetop%2C+a+small+iron+age+town.+Life+is+hard+and+winter+harder%2C+I+travel+the+roads+to+ease+the+burden+and+bring+home+some+coin+for+visiting+traders.&origins_background=I%27ve+always+been+a+Jester+but+the+call+of+adventure+came+when+that+cursed+carnival+turned+up.&relationships_cnt=2&relationships_0_name=Bryok&relationships_0_relationship=He+guides+me+-+when+I+accept+it&relationships_0_depth=2&relationships_1_name=Ossian&relationships_1_relationship=I+rely+on+him%2C+a+lot.++I%27m+always+getting+myself+into+trouble+-+but+never+so+much+he+hasn%27t+been+able+to+drag+me+out+-+yet.&relationships_1_depth=1&equipment_cnt=3&equipment_0_name=deadly-sharp+sword+cane&equipment_0_details=1d8+dmg+%23concealed+%23hand+%23precise+%23two-handed&equipment_1_name=artistic+samples&equipment_1_details=Mark+once+to+share+with+an+NPC+while+you+Sense+Motive+to+roll+with+adv&equipment_1_uses=2%2F2&equipment_2_name=provisions&equipment_2_details=Mark+once+while+you+Comfort+or+Support+to+turn+a+%22No%22+into+a+%22Yes%22&equipment_2_uses=3%2F3&str=-1&dex=%2B1&cha=%2B3&int=%2B1&wis=0&track_stat_wis=2&bas=Lute&move_spy002=1&move_evya_p1=1&move_evya_s0_p1=1&move_evya_s0_p3=1&move_evya_s1_p1=1&move_evya_p4=1&move_evya_p5=1&move_dab004=1&move_evya_s0_p5=1&move_evya_p6=1&move_evya_p7=1&move_swb005=1&track_swb001=2&move_evya_s0_p9=1&move_evya_s0_p10=1&move_swb004=1&takeFrom_swb004_move=str015&move_str015_dtl=The+Lady+of+Death+whispers+to+me+in+my+sleep&track_str015=2&str15_0=My+own+death&str15_1=The+Lady+of+Crows+%28Death%29&move_spy005=1&move_spy004=1&hide_untaken=1">Wynn&nbsp;Swifthand</a>
    </td>
    <td width="33%">🕆&nbsp;<a title="The Cleric" href="https://tznind.github.io/dw2/cs.html?role=The+Cleric&role2=Warpriest&takeFrom_evy022_role=Struggles&level=4&hp=11&wis=%2B2&str=%2B2&move_evya_p2=1&dex=0&int=%2B1&cha=-1&track_stat_int=2&name=Dan+Helsing&takeFrom_evy023_role=Bonds&takeFrom_evy023_2_role=Bonds&takeFrom_evy023_3_role=Bonds&takeFrom_evy023_4_role=Bonds&takeFrom_evy023_5_role=Bonds&takeFrom_evy023_6_role=Bonds&player=M&origins_background=Professor+and+physician%2C+but+now+I+hunt+the+undead%21&origins_community=A+small+community+in+the+carpathians+and+then+the+big+cities+of+learning.&origins_ancestry=Human&relationships_cnt=1&relationships_0_name=Nina+Barker&relationships_0_relationship=Struggling+allies%2C+her+daliances+with+the+undead+trouble+me+deeply&equipment_cnt=3&equipment_0_name=plain+quarterstaff&equipment_0_details=1d6+dmg+%23close+%23hand&equipment_1_name=holy+water+vials&equipment_1_details=%23holy+%23close.+Mark+to+ignore+all+Resistances+of+an+enemy+of+your+deity+until+the+end+of+the+Scene&equipment_1_uses=3%2F3&equipment_2_name=medicine&equipment_2_details=Mark+to+have+someone+double+the+HP+they+recover+next+or+clear+one+Condition%2Faffliction&equipment_2_uses=2%2F2&move_wpr004=1&move_evya_p1=1&move_evya_p5=1">Dan&nbsp;Helsing</a></td>
    <td width="33%"></td>
</tr>
</table>


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
