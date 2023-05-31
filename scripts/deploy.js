const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");

  const gameContract = await gameContractFactory.deploy(
    ["Anitta", "Ronaldinho Gaúcho", "Zeca Pagodinho"],
    [
      "Qmf5H2u2SzA6vwqiVqR1sXYA7t2uVE3b8Sd9j9eDbpZ7no", // anitta
      "QmePWNHTawtw6sEDbr2XJv2P1rWyu4xnFwnToF4wHdFU8o", // ronal
      "QmNMQjNVhVwPtqVhccj7uuKnLJqNBKZBoi13AS4ZF1XKcH", // zek
    ],
    [100, 200, 300],
    [100, 50, 25],
    "Capitão Nascimento",
    "QmTAmLezdUXmvZFhhhmbondkSCMb3asGGMK5KxKysVg4en",
    10000,
    50
  );

  await gameContract.deployed();
  console.log("Contrato deployado no endereço:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
