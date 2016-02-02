pacman -Qei | grep "Name\|Install Date" > tmp

old_IFS=$IFS
IFS=$'\n'

for line in $(cat tmp)
do
	echo $line
done
IFS=$old_IFS

# echo "" > tmp
