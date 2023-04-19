# Hrnet Modal

## Install 💻 :

- use : `npm i @jioponda/modal`

### This is a REACT modal package for the HRnet application form including 🔽 :

- the `FormModal` component and is props `Text` for customise it
- the `displayModal` function to display the latter
- and finally a `hideModal` function to make it disappear (basically it is already linked to the cross of the modal)

### Example of use 🔽 :

- if you want to display this modal when clicking on an input or other you can proceed like this :

Start by creating a modal.js file then import your modal at the top of this file with the following line of code

`import Modal from "@jioponda/modal/dist/Modal";`

you can also add to this line the functions of display and suppression of the modal like this 🔽:

`import Modal , {displayModal , hideModal} from "@jioponda/modalhrnet"`

once done add your component to your file, for example like this

`export default function Mycomponent() { return( <div> <Modal Text={"Your Text !"}> </div>); }`

if you want to make it visible use the `onclick` with the `displayModal` function and make it disappear with the `hideModal` function (again, the hideModal function is already linked on the cross of the modal)

`<input onclick={displayModal}> START </input>`

Finally you can change the style of the component with a simple CSS files and select the class do you want
(`.modal` , `.close-modal` and `.text-modal` )
