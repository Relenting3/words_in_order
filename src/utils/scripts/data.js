/**
 * 
 * @param {string} hex color in hex
 * @param {string} opacity could be from 0 to 1
 * @returns color in rgba
 */
 function hexToRgba(hex, opacity='1'){
	let c;
	if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
			c= hex.substring(1).split('');
			if(c.length === 3){
					c= [c[0], c[0], c[1], c[1], c[2], c[2]];
			}
			c= '0x'+c.join('');
			return `rgba(${[(c>>16)&255, (c>>8)&255, c&255].join(',')},${opacity})`;
	}
	return 'rgba(0,0,0,1)'
}

/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns Random number with min and max limits (excluding max value).
 */

 function randomNumber(min = 0,max = 0){
  return Math.floor(Math.random() * (max - min)) + min
}

export {
  hexToRgba,
	randomNumber
}