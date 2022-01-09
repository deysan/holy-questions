import React from 'react';
import Emoji from './Emoji';

const habitList = [
  {
    name: 'Wake up early',
    icon: '⏰',
    label: 'alarm_clock',
    color: 'green'
  },
  {
    name: 'Learn something new',
    icon: '🌍',
    label: 'globe_showing_europe_africa',
    color: 'green'
  },
  {
    name: 'Learn an instrument',
    icon: '🎷',
    label: 'saxophone',
    color: 'green'
  },
  {
    name: 'Pray',
    icon: '🙏',
    label: 'folded_hands',
    color: 'green'
  },
  {
    name: 'Journal',
    icon: '✏',
    label: 'pencil',
    color: 'green'
  },
  {
    name: 'Learn a language',
    icon: '💬',
    label: 'speech_balloon',
    color: 'green'
  },
  {
    name: 'Read',
    icon: '📘',
    label: 'blue_book',
    color: 'green'
  },
  {
    name: 'Educational podcast',
    icon: '🎧',
    label: 'headphone',
    color: 'green'
  },
  {
    name: 'Meditate',
    icon: '☯',
    label: 'yin_yang',
    color: 'green'
  },
  {
    name: 'Littering',
    icon: '🚯',
    label: 'no_littering',
    color: 'orange'
  },
  {
    name: 'Twitter',
    icon: '🐦',
    label: 'bird',
    color: 'orange'
  },
  {
    name: 'Nail Biting',
    icon: '😒',
    label: 'unamused_face',
    color: 'orange'
  },
  {
    name: 'Gambling',
    icon: '🎰',
    label: 'slot_machine',
    color: 'orange'
  },
  {
    name: 'Video Games',
    icon: '🎮',
    label: 'video_game',
    color: 'orange'
  },
  {
    name: 'Smoking',
    icon: '🚬',
    label: 'cigarette',
    color: 'orange'
  },
  {
    name: 'Junk food',
    icon: '🍩',
    label: 'doughnut',
    color: 'orange'
  },
  {
    name: 'Caffeine',
    icon: '☕',
    label: 'hot_beverage',
    color: 'orange'
  },
  {
    name: 'Excessive Drinking',
    icon: '🥃',
    label: 'tumbler_glass',
    color: 'orange'
  },
  {
    name: 'Being in Bad Relationships',
    icon: '😰',
    label: 'anxious_face_with_sweat',
    color: 'orange'
  },
  {
    name: 'Focusing on the Negatives',
    icon: '😨',
    label: 'fearful_face',
    color: 'orange'
  }
];

const HabitList = () => {
  return (
    <ul className="habits-animation">
      {habitList.map((habitItem) => (
        <li key={habitItem.name}>
          <p className={`button button-habit button-${habitItem.color}`}>
            <Emoji icon={habitItem.icon} label={habitItem.label} />
            {habitItem.name}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default HabitList;
