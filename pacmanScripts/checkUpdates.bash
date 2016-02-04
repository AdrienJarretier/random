TMP_DIR=$(mktemp -dp .)

echo "n" | sudo pacman -Syu > $TMP_DIR/tmp
cat $TMP_DIR/tmp | grep Packages | sed "s/Packages (.*) //" > $TMP_DIR/updates.txt


echo "packages wich are not dependencies : "
for word in $(cat $TMP_DIR/updates.txt)
do
	pacman -Qi $word 2> /dev/null
	while [ $? -eq 1 ] && [ ${#word} -gt 1 ]
	do
		word=${word:0:-1}
		ouput=$(pacman -Qi $word 2> /dev/null)
	done

	if [ $(echo "$ouput" | grep -c "Required By  *:  *None") -eq 1  ]
	then
		echo "$ouput" | grep --color=always "Name\|Description\|Optional For\|Install Date\|Install Reason"
		echo "-------------------------------------------------------------------------------"
	fi
done

rm -r $TMP_DIR
