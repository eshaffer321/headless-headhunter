import { Description, Field, FieldGroup, Fieldset, Label, Legend } from '@/components/fieldset'
import Footer from '@/components/footer'
import { Input } from '@/components/input'
import NavBar from '@/components/navbar'
import { Select, Textarea } from '@headlessui/react'
import { BugAntIcon, ChatBubbleLeftRightIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import { Text } from '@/components/text'
export default function Example() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <NavBar></NavBar>
        <form action="/orders" method="POST">
      {/* ... */}
      <Fieldset>
        <Legend>Shipping details</Legend>
        <Text>Without this your odds of getting your order are low.</Text>
        <FieldGroup>
          <Field>
            <Label>Street address</Label>
            <Input name="street_address" />
          </Field>
          <Field>
            <Label>Country</Label>
            <Select name="country">
              <option>Canada</option>
              <option>Mexico</option>
              <option>United States</option>
            </Select>
            <Description>We currently only ship to North America.</Description>
          </Field>
          <Field>
            <Label>Delivery notes</Label>
            <Textarea name="notes" />
            <Description>If you have a tiger, we'd like to know about it.</Description>
          </Field>
        </FieldGroup>
      </Fieldset>
      {/* ... */}
    </form>
      <Footer></Footer>
    </div>
  )
}
