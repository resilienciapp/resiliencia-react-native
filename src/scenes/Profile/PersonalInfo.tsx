import { useQuery } from '@apollo/client'
import { gql } from 'graphql-tag'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProfileQuery as ProfileQueryData } from 'src/gql/types'

const ProfileQuery = gql`
  query ProfileQuery {
    user {
      id
      profile {
        email
        name
      }
    }
  }
`

export const PersonalInfo: React.FC = () => {
  const { data } = useQuery<ProfileQueryData>(ProfileQuery)

  if (!data) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{data.user.profile.name}</Text>
        <Text style={styles.subtitle}>{data.user.profile.email}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
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
