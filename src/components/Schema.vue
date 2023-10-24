<template>
    <div>
        <form @submit.prevent="submit">
            <!--     <div class="flex flex-col">
                <label for="json-input">Enter Purchase JSON:</label>
                <textarea class="border p-2 m-2" id="json-input"></textarea>
            </div> -->
            <div v-if="error">
                {{ error }}
            </div>
            <button class="bg-green-400 text-white p-2 rounded-md m-2" type="submit">Submit</button>
        </form>
    </div>
</template>
  
<script>
import Ajv from 'ajv'
//import addFormats from "ajv-formats"
import payload from '../data/payload'
import jsonSchema from '../data/schema'
//const Ajv = new Ajv()
addFormats(Ajv)




export default {
    name: "Schema",
    data() {
        return {
            jsonData: payload,
            jsonSchema: jsonSchema,
            error: ''
        }
    },
    methods: {
        submit() {
            const ajv = new Ajv({ allErrors: true })
            const validate = ajv.compile(this.getSchema())
            const isValid = validate(JSON.parse(this.jsonData))
            if (!isValid) {
                const error = validate.errors[0]
                if (error.dataPath === '.date' && error.keyword === 'format') {
                    this.error = 'Invalid date format. Please enter a date in the format of YYYY-MM-DDTHH:mm:ss.'
                } else {
                    this.error = error.message
                }
            } else {
                this.error = ''
                // handle successful submission
            }
        },
        getSchema() {
            return this.jsonSchema;
        }
    }
}
</script>
  
<style scoped>
.border {
    border: 1px solid #727072;
    border-radius: 4px;
}
</style>