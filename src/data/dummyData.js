// Enhanced dummy data for modern calendar dashboard with validation testing
export const dummyData = {
  // Valid data entries
  "01-09-2025": [
    {"user_1": 45},
    {"user_2": 78},
    {"user_3": 32},
    {"user_4": 91},
  ],
  "02-09-2025": [
    {"user_1": 67},
    {"user_2": 23},
    {"user_3": 89},
    {"user_4": 56},
  ],
  "03-09-2025": [
    {"user_1": 34},
    {"user_2": 82},
    {"user_3": 45},
    {"user_4": 73},
  ],
  "05-09-2025": [
    {"user_1": 91},
    {"user_2": 37},
    {"user_3": 64},
    {"user_4": 28},
  ],
  "07-09-2025": [
    {"user_1": 52},
    {"user_2": 86},
    {"user_3": 19},
    {"user_4": 74},
  ],
  "10-09-2025": [
    {"user_1": 68},
    {"user_2": 41},
    {"user_3": 95},
    {"user_4": 23},
  ],
  "12-09-2025": [
    {"user_1": 37},
    {"user_2": 84},
    {"user_3": 56},
    {"user_4": 72},
  ],
  "15-09-2025": [
    {"user_1": 79},
    {"user_2": 43},
    {"user_3": 67},
    {"user_4": 31},
  ],
  "18-09-2025": [
    {"user_1": 26},
    {"user_2": 88},
    {"user_3": 54},
    {"user_4": 73},
  ],
  "20-09-2025": [
    {"user_1": 62},
    {"user_2": 39},
    {"user_3": 87},
    {"user_4": 45},
  ],
  "22-09-2025": [
    {"user_1": 48},
    {"user_2": 76},
    {"user_3": 33},
    {"user_4": 89},
  ],
  "25-09-2025": [
    {"user_1": 71},
    {"user_2": 29},
    {"user_3": 65},
    {"user_4": 52},
  ],
  "28-09-2025": [
    
  ],
  
  // Edge cases for validation testing
  "30-09-2025": [], // Empty array - should not be highlighted
  "31-09-2025": [{"user_1": 0}], // Zero value - should not be highlighted
  "32-09-2025": [{"user_1": -5}], // Negative value - should not be highlighted
  "33-09-2025": [{"invalid_user": 50}], // Invalid user format - should not be highlighted
  "34-09-2025": [{"user_1": 50, "user_2": 30}], // Multiple keys - should not be highlighted
  "35-09-2025": [{"user_1": "invalid"}], // Invalid value type - should not be highlighted
  "36-09-2025": [null], // Null entry - should not be highlighted
  "37-09-2025": [{"user_1": Infinity}], // Infinity value - should not be highlighted
  "38-09-2025": [{"user_1": NaN}], // NaN value - should not be highlighted
  
  // Invalid date formats - should not be processed
  "invalid-date": [{"user_1": 50}],
  "99-99-9999": [{"user_1": 50}],
  "not-a-date": [{"user_1": 50}]
}