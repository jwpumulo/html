// forloop2.js
// 1-~10까지 짝수값을 구하는 반복

// sum = 0;
// for (let i = 1; i <= 10; i++) {

//   console.log(`i값 ${i}`)
//   if (i % 2 == 0) {
//     sum = sum + i;
//   }
// }




// let html = '';
// html += '<table border ="1">';
// html += '<tbody>';
// for (let i = 1; i <= 9; i++) {
//   html += `<tr><td style= 'background-color: yellow;' >2* ${i} = ${2*i} </td></tr>`
// }
// html += '</tbody>';
// html += '</table>';
// document.write(html);


let html = '';
html += '<table border ="1">';
html += '<tbody>';
for (let i = 1; i <= 9; i++) {
  if (i % 2 == 1)
    html += `<tr><td style= 'background-color: yellow;' >2* ${i} = ${2*i} </td></tr>`;
  else html += `<tr><td style= 'background-color: blue; color: white;' >2* ${i} = ${2*i} </td></tr>`;
}
html += '</tbody>';
html += '</table>';
document.write(html);


// document.write('<table border="1">');
// document.write('<tbody>');

// for (let i=1; i <=9; i++)
// {document.wirte('<tr>');
// document.wirte('<td>2 *'+ i + '=' + (2 * i) + '</td>');
// document.wirte('</tr>');}
// document.write('<tbody>');
// document.write('<table>');

// document.write('</tbody>');

// document.write('</table>');