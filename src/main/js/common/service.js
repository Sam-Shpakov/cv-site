export async function giveInfoItems() {
  let response = await fetch('./assets/items.json');
  let items = await response.json();
  return items;
}
