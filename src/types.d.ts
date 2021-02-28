interface Values {
  firstName: string
  lastName: string
  email: string
  gender: string
  country: string
  password: string
  flightNumber: string
}

type FormValues = Record<string, string | number | boolean>
