const arrayOfObjectSort = (arr, key)=> {
	arr.sort((a, b) => {
	      const A = a[key].toUpperCase();
		  const B = b[key].toUpperCase();

		  let comparison = 0;
		  if (A > B) {
		    comparison = 1;
		  } else if (A < B) {
		    comparison = -1;
		  }
		  return comparison;
	});
	return arr;
}

export { arrayOfObjectSort };