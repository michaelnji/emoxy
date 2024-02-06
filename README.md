# EMOXY👀 - A Javascript API wrapper for Emojihub

Emoxy is a Javascript library for interacting with the [Emojihub](https://github.com/cheatsnake/emojihub) API.

### Installation

```shell
npm install emoxy
```

### Usage

Import the library:

```javascript
//using require() syntax 
const emoxy = require("emoxy");

//using imports
import {} from 'emoxy'
```

#### getAllEmojis()

```javascript
import {getAllEmojis} from 'emoxy'
const allEmojis = await getAllEmojis();

/* returns an object
{
    code:200,
    emojis:[...],
    message:success
}
*/
```

#### getAllCategories

```javascript
import {getAllCategories} from 'emoxy';
const categories = getAllCategories()
/*returns an array
  
   [
     {
       name:'',
       group:[...]
     },
     ...
  ]
  
  
*/
```
#### getSpecificGroups
Returns the group names that are found that said category.
can be used to get arguments to be used with `getAllEmojisInGroup()` or `getRandomEmojiInGroup`
```javascript
import {getSpecificGroups} from 'emoxy';
const group = getSpecificGroups('category')
```

#### getAllEmojisInCategory

```javascript
import {getAllEmojisInCategories} from 'emoxy';
const emojis = getAllEmojisInCategories('category')

/* returns an object
{
    code:200,
    emojis:[...],
    message:success
}
*/
  
```
#### getRandomEmojiInCategory

```javascript
import {getRandomEmojiInCategory} from 'emoxy';
const emoji = getRandomEmojiInCategory('category')

/* returns an object
{
    code:200,
    emoji:{...},
    message:success
}
*/
  
```

#### getAllEmojisInGroup

```javascript
import {getAllEmojisInGroup} from 'emoxy';
const emojis = getAllEmojisInGroup('group')

/* returns an object
{
    code:200,
    emojis:[...],
    message:success
}
*/
  
```
#### getRandomEmojiInGroup

```javascript
import {getRandomEmojiInGroup} from 'emoxy';
const emoji = getRandomEmojiInGroup('group')

/* returns an object
{
    code:200,
    emoji:{...},
    message:success
}
*/
  
```

### Types definitions (for typescript users)

```typescript
 type EmoxyEmojiCategory =
	| "smileys-and-people"
	| "animals-and-nature"
	| "food-and-drink"
	| "travel-and-places"
	| "activichties"
	| "objects"
	| "symbols"
	| "flags";

 type EmoxyEmoji = {
	name: string;
	category: string;
	group: string;
	htmlCode: string[];
	unicode: string[];
};



 type EmoxyResponseGroup = {
	code: number;
	message: string;
	emojis: EmoxyEmoji[] | null;
};
 type EmoxyResponse = {
	code: number;
	message: string;
	emoji: EmoxyEmoji | null;
};
```

This project was built using:
- Typescript
- Bun

## Appreciation
Thanks to the original API from [Emojihub](https://github.com/cheatsnake/emojihub)

## Contributing

1. CLone the repo

```shell
git clone https://github.com/michaelnji/emoxy.git
```

2. install dependencies

```shell
bun install
```

3. To run the server

```shell
bun dev
```

4. To run tests

```shell
bun run test
```

5. To build for production

```shell
bun run build
```