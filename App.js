import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Example() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://assets.withfra.me/Landing.3.png' }}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Plan your day{'\n'}with{' '}
            <View style={styles.appName}>
              <Text style={styles.appNameText}>DailyPlan</Text>
            </View>
          </Text>
          <Text style={styles.text}>
          DailyPlan is a versatile productivity app designed to streamline your daily routines, tasks, and goals. Whether you're managing a busy schedule, organizing personal projects, or optimizing your time, DailyPlan+ provides the tools you need to stay focused, efficient, and motivated throughout the day.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Let's go</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#281b52',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 40,
  },
  text: {
    marginBottom:20,
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center',
  },
  /** Hero */
  hero: {
    backgroundColor: '#d8dffe',
    margin: 12,
    borderRadius: 16,
    padding: 16,
  },
  heroImage: {
    width: '100%',
    height: 400,
  },
  /** Content */
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 28,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  appName: {
    backgroundColor: '#fff2dd',
    transform: [
      {
        rotate: '1deg',
      },
    ],
    paddingHorizontal: 4,
  },
  appNameText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#281b52',
  },
  /** Button */
  button: {
    backgroundColor: '#56409e',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
});