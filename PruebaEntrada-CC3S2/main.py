class Stream:
    def __init__(self, position, flow):
        self.position = position
        self.flow = flow

    def __str__(self):
        return "Stream {} with flow {}".format(self.position,self.flow)
    
class Mountain:
    def __init__(self):
        self.lines = None
        with open("./input.txt",'r') as data:
            self.lines = data.readlines()

    def change_positions(self,index):
        for i in range(index,len(self.streams)):
            self.streams[i].position = i+1

    def split_stream(self,index):
        stream_to_split = int(self.lines[index+1])
        flow_left = int(self.lines[index+2]) * self.streams[stream_to_split-1].flow * 0.01
        flow_right = self.streams[stream_to_split-1].flow - flow_left
        self.streams[stream_to_split-1].flow = flow_left
        self.streams.insert(stream_to_split,Stream(stream_to_split+1,flow_right))
        self.change_positions(stream_to_split)

    def join_stream(self,index):
        stream_to_join_right = int(self.lines[index+1])
        self.streams[stream_to_join_right-1].flow += self.streams[stream_to_join_right].flow
        self.streams.pop(stream_to_join_right)
        
    def run(self):
        n = int(self.lines[0])
        self.streams = []
        for i in range(n):
            self.streams.append(Stream(i+1,int(self.lines[i+1])))
        index = n+1
        value = int(self.lines[index])
        while value != 77:
            if value == 99:
                self.split_stream(index)
                index +=3
                value = int(self.lines[index])
                continue
            if value == 88:
                self.join_stream(index)
                index +=2
                value = int(self.lines[index])
                continue
        for s in self.streams:
            print(round(s.flow),end=' ')
        print("")


mountain = Mountain()
mountain.run()