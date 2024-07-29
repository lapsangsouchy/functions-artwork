/* Part 1 - Palindromes */
// Using the example of LEVEL and EEVEE though this method can be used for other words!

function drawL() {
  console.log('#');
  console.log('#');
  console.log('#');
  console.log('#');
  console.log('#######');
  console.log('');
}

function drawE() {
  console.log('#######');
  console.log('#');
  console.log('####');
  console.log('#');
  console.log('#######');
  console.log('');
}

function drawV() {
  console.log('#        #');
  console.log(' #      #');
  console.log('  #    #');
  console.log('   #  #');
  console.log('    #');
  console.log('');
}

// LEVEL
drawL();
drawE();
drawV();
drawE();
drawL();

// EEVEE
drawE();
drawE();
drawV();
drawE();
drawE();

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 2 - Drawing With Functions */
// There are a lot of different ways to do this! Here's just one of them:
function smile() {
  console.log('  ##############  ');
  console.log('##   ~    ~     ##');
  console.log('##   0    0     ##');
  console.log('##              ##');
  console.log('##     U        ##');
  console.log('  ##############  ');
}

function sad() {
  console.log('  ##############  ');
  console.log('##   _/   _/    ##');
  console.log('##   0    0     ##');
  console.log('##              ##');
  console.log('##     ^        ##');
  console.log('  ##############  ');
}

function kissyFace() {
  console.log('  ##############  ');
  console.log('##  ~~~  ~~~    ##');
  console.log('##   >-   0     ##');
  console.log('##              ##');
  console.log('##      B       ##');
  console.log('  ##############  ');
}

function body() {
  console.log('       ##     ');
  console.log('      O##O    ');
  console.log('    O  ##  O   ');
  console.log('  O    ##    O ');
  console.log('O      ##      O');
  console.log('       ##     ');
  console.log('       ##     ');
  console.log('      O  O      ');
  console.log('     O    O      ');
  console.log('    O      O      ');
  console.log('   O        O      ');
}

// smile();
// sad();
kissyFace();
body();
