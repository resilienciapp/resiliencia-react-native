import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import profilePlaceholder from '../../assets/profile-placeholder.png'

interface Props {
  name?: string
  email?: string
}

export const PersonalInfo: React.FC<Props> = ({ name, email }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={profilePlaceholder} />
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{email}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    alignContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 20,
    width: 100,
  },
  infoContainer: {
    alignItems: 'center',
  },
  subtitle: {
    fontWeight: 'normal',
  },
  title: {
    fontWeight: 'bold',
  },
})
