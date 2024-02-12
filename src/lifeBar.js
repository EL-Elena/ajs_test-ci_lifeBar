const healthRules = {
  red: {
    health: 0,
    healthLevel: 'critical',
  },
  yellow: {
    health: 15,
    healthLevel: 'wounded',
  },
  green: {
    health: 50,
    healthLevel: 'healthy',
  },
};

export default function healthIndicator(name, health) {
  if (health > healthRules.green.health) {
    return healthRules.green.healthLevel;
  }
  if (health >= healthRules.yellow.health) {
    return healthRules.yellow.healthLevel;
  } return healthRules.red.healthLevel;
}
