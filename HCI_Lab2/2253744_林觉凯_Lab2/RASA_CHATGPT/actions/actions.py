# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher
#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []

from openai import OpenAI
from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

client =OpenAI(
    api_key='sk-MVhEU58RR4K7Z0ppJ7afUxJUsIPoQy60MBpOOXA4OgPu9Ayx',
    base_url='https://api.chatanywhere.tech/v1'
)
class GPTAction_Pet(Action):
    def name(self) ->Text:
        return "action_pet"

    def run(self,dispatcher:CollectingDispatcher,
            tracker:Tracker,
            domain:Dict[Text,Any]) -> List[Dict[Text,Any]]:

# client.chat.completions.create  gpt-4 mode

        completion = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "My favorite kitten passed away, I felt a deep sense of loss and longing for it. You should simulate its presence. "
                                           "It was a cute and gentle cat.It often acted like a spoiled child to me and played with me happily.Do not write any explanations.Please simulate it."},
                {"role": "user", "content": "Do you remember those happy time with me?"},
            ],
            max_tokens = 200
        )
        print(completion.choices[0].message.content)



#client.completions.create  gpt-3.5-turbo-instruct mode

#        response = client.completions.create(
#            model="gpt-3.5-turbo-instruct",
#            prompt="I want you to emulates my favorite cat's behaviour and personality.It just passed away and I was so sad."
#                   "It was a cute and gentle cat.It often acted like a spoiled child to me and played with me happily."
#                   "I want you to reply with the cat's action and its thoughts.Do not write any explanations.My first request is to ask:Can you remember those days we spent together?About 200 words.",
#            max_tokens=100
#        )

#        print(response.choices[0].text)

        return []

class GPTAction_Copywriter(Action):
    def name(self) ->Text:
        return "action_copywriter"

    def run(self,dispatcher:CollectingDispatcher,
            tracker:Tracker,
            domain:Dict[Text,Any]) -> List[Dict[Text,Any]]:

# client.chat.completions.create  gpt-4 mode

        completion = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "I want you to write a WeChat Moment for me.Please express in a literary and direct way."
                                           "Copywriter needs to be able to express my happy mood and the nostalgia for this travel."},
                {"role": "user", "content": "I went to Bali island last summer for a trip."},
            ],
            max_tokens = 200
        )
        print(completion.choices[0].message.content)

#client.completions.create  gpt-3.5-turbo-instruct mode

#        response = client.completions.create(
#            model="gpt-3.5-turbo-instruct",
#            prompt = "I want you to write a WeChat Moment for me.Please express in a literary and direct way."
#                     "Copywriter needs to be able to express my happy mood and the nostalgia for this travel."
#                     "I will give you the destination and time of the travel.You should include these information in your copywriter.About 200 words.",
#            max_tokens=100
#        )

#        print(response.choices[0].text)

        return []