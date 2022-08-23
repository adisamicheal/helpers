/**
 * @param {string} str
 */
interface value {
    str: string
}
const copyTextToClipboard = ({str} : value): void => {
	const element = document.createElement('textarea');
	element.value = str;
	element.setAttribute('readonly', '');
	element.style.position = 'absolute';
	element.style.left = '-9999px';
	document.body.appendChild(element);
	const selected =
		document.getSelection().rangeCount > 0
			? document.getSelection().getRangeAt(0)
			: false;
	element.select();
	// document.execCommand('copy'); @depreciated
	navigator.clipboard.writeText(element.innerHTML)
	document.body.removeChild(element);
	if (selected) {
		document.getSelection().removeAllRanges();
		document.getSelection().addRange(selected);
	}
};

export default copyTextToClipboard;