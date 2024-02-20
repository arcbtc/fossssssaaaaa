export const addressesAndFiles = [
  {
    address: "0x1000",
    fileName: "fossa.ino.bootloader.bin",
  },
  {
    address: "0x8000",
    fileName: "fossa.ino.partitions.bin",
  },
  {
    address: "0xE000",
    fileName: "boot_app0.bin",
  },
  {
    address: "0x10000",
    fileName: "fossa.ino.bin",
  },
];

export const configPath = "elements.json";
export const elements = [
  {
    name: "config_lnurlatm",
    value: "",
    label: "LNURL ATM",
    type: "text",
  },
  {
    name: "config_maxamount",
    value: "",
    label: "Max amount a user can withdraw",
    type: "text",
  },
  {
    name: "config_charge",
    value: "",
    label: "Charge added to withdraws",
    type: "text",
  }
];