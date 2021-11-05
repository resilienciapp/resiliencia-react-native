import { useQuery } from '@apollo/client'
import { Picker } from '@react-native-picker/picker'
import gql from 'graphql-tag'
import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import { DateTimePicker } from 'src/components/DateTimePicker/index.ios'
import { CategoriesQuery as CategoriesQueryData } from 'src/gql/types'
import { Route } from 'src/routes/Route'
import { RouteComponent } from 'src/routes/Stack'
import { Color } from 'src/styles/Color'

import { Label } from './Label'

const CategoriesQuery = gql`
  query CategoriesQuery {
    categories {
      description
      id
      name
    }
  }
`

export const AddMarker: RouteComponent<Route.AddMarker> = () => {
  const { data } = useQuery<CategoriesQueryData>(CategoriesQuery)

  const [date, setDate] = useState<Date>(new Date())

  if (!data) {
    return null
  }

  return (
    <View style={styles.container}>
      <Label text={strings.description} />
      <TextInput
        multiline={true}
        placeholder={strings.description}
        placeholderTextColor={Color.Gray}
        style={styles.description}
      />

      <Label text={strings.category} />
      <Picker>
        {data.categories.map(({ id, name }, index) => (
          <Picker.Item key={index} label={name} value={id} />
        ))}
      </Picker>

      <Label text={strings.duration} />
      <DateTimePicker value={date} setValue={setDate} />
    </View>
  )
}

const strings = new LocalizedStrings({
  en: {
    category: 'Category',
    description: 'Description',
    duration: 'Duration',
  },
  es: {
    category: 'Categoría',
    description: 'Descripción',
    duration: 'Duración',
  },
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
    flex: 1,
    padding: 16,
  },
  description: {
    borderColor: Color.Gray,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
    maxHeight: 150,
    minHeight: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
})
